// src/InteractiveBackground.jsx

import React, { useEffect, useRef } from 'react';

// Vector class (unchanged)
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static add(a, b) {
    return new Vector(a.x + b.x, a.y + b.y);
  }

  static sub(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  static scale(v, s) {
    return v.clone().scale(s);
  }

  static random() {
    return new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  }

  set(x, y) {
    if (typeof x === 'object') {
      y = x.y;
      x = x.x;
    }
    this.x = x || 0;
    this.y = y || 0;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  normalize() {
    const m = Math.sqrt(this.x * this.x + this.y * this.y);
    if (m) {
      this.x /= m;
      this.y /= m;
    }
    return this;
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  angleTo(v) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    return Math.atan2(dy, dx);
  }

  distanceTo(v) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  distanceToSq(v) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    return dx * dx + dy * dy;
  }

  lerp(v, t) {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    return this;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  toString() {
    return `(x:${this.x}, y:${this.y})`;
  }
}

// GravityPoint class (unchanged)
class GravityPoint extends Vector {
  constructor(x, y, radius, targets) {
    super(x, y);
    this.radius = radius;
    this.currentRadius = radius * 0.5;
    this._targets = {
      particles: targets.particles || [],
      gravities: targets.gravities || []
    };
    this._speed = new Vector();
    this.gravity = 0.05;
    this.isMouseOver = false;
    this.dragging = false;
    this.destroyed = false;
    this._easeRadius = 0;
    this._dragDistance = null;
    this._collapsing = false;
  }

  static RADIUS_LIMIT = 65;
  static interferenceToPoint = true;

  hitTest(p) {
    return this.distanceTo(p) < this.radius;
  }

  startDrag(dragStartPoint) {
    this._dragDistance = Vector.sub(dragStartPoint, this);
    this.dragging = true;
  }

  drag(dragToPoint) {
    this.x = dragToPoint.x - this._dragDistance.x;
    this.y = dragToPoint.y - this._dragDistance.y;
  }

  endDrag() {
    this._dragDistance = null;
    this.dragging = false;
  }

  addSpeed(d) {
    this._speed = this._speed.add(d);
  }

  collapse() {
    this.currentRadius *= 1.75;
    this._collapsing = true;
  }

  render(ctx) {
    if (this.destroyed) return;

    const particles = this._targets.particles;
    particles.forEach(particle => {
      particle.addSpeed(Vector.sub(this, particle).normalize().scale(this.gravity));
    });

    this._easeRadius = (this._easeRadius + (this.radius - this.currentRadius) * 0.07) * 0.95;
    this.currentRadius += this._easeRadius;
    if (this.currentRadius < 0) this.currentRadius = 0;

    if (this._collapsing) {
      this.radius *= 0.75;
      if (this.currentRadius < 1) this.destroyed = true;
      this._draw(ctx);
      return;
    }

    const gravities = this._targets.gravities;
    gravities.forEach(g => {
      if (g === this || g.destroyed) return;

      if (
        (this.currentRadius >= g.radius || this.dragging) &&
        this.distanceTo(g) < (this.currentRadius + g.radius) * 0.85
      ) {
        g.destroyed = true;
        this.gravity += g.gravity;

        const absorp = Vector.sub(g, this).scale(g.radius / this.radius * 0.5);
        this.addSpeed(absorp);

        const garea = g.radius * g.radius * Math.PI;
        this.currentRadius = Math.sqrt((this.radius * this.radius * Math.PI + garea * 3) / Math.PI);
        this.radius = Math.sqrt((this.radius * this.radius * Math.PI + garea) / Math.PI);
      }

      g.addSpeed(Vector.sub(this, g).normalize().scale(this.gravity));
    });

    if (GravityPoint.interferenceToPoint && !this.dragging)
      this.add(this._speed);

    this._speed = new Vector();

    if (this.currentRadius > GravityPoint.RADIUS_LIMIT) this.collapse();

    this._draw(ctx);
  }

  _draw(ctx) {
    const grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius * 5);
    grd.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2, false);
    ctx.fillStyle = grd;
    ctx.fill();

    const r = Math.random() * this.currentRadius * 0.7 + this.currentRadius * 0.3;
    const grd2 = ctx.createRadialGradient(this.x, this.y, r, this.x, this.y, this.currentRadius);
    grd2.addColorStop(0, 'rgba(0, 0, 0, 1)');
    grd2.addColorStop(1, Math.random() < 0.2 ? 'rgba(255, 196, 0, 0.15)' : 'rgba(103, 181, 191, 0.75)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = grd2;
    ctx.fill();
  }
}

// Particle class (unchanged)
class Particle extends Vector {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
    this._latest = new Vector();
    this._speed = new Vector();
  }

  addSpeed(d) {
    this._speed.add(d);
  }

  update() {
    if (this._speed.length() > 12) this._speed.normalize().scale(12);
    this._latest.set(this);
    this.add(this._speed);
  }
}

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const bufferCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bufferCvs = bufferCanvasRef.current;
    const context = canvas.getContext('2d');
    const bufferCtx = bufferCvs.getContext('2d');

    let screenWidth = canvas.width = window.innerWidth;
    let screenHeight = canvas.height = window.innerHeight;

    const mouse = new Vector();
    const gravities = [];
    const particles = [];
    const BACKGROUND_COLOR = '#FFF6E9';
    const PARTICLE_RADIUS = 2;
    const G_POINT_RADIUS = 12;

    const resize = () => {
      screenWidth = canvas.width = window.innerWidth;
      screenHeight = canvas.height = window.innerHeight;
      bufferCvs.width = screenWidth;
      bufferCvs.height = screenHeight;

      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;

      const grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
    };

    const mouseMove = e => {
      mouse.set(e.clientX, e.clientY);

      let hit = false;
      gravities.forEach(g => {
        if ((!hit && g.hitTest(mouse)) || g.dragging) {
          g.isMouseOver = hit = true;
        } else {
          g.isMouseOver = false;
        }
      });

      canvas.style.cursor = hit ? 'pointer' : 'default';
    };

    const mouseDown = e => {
      for (let i = gravities.length - 1; i >= 0; i--) {
        if (gravities[i].isMouseOver) {
          gravities[i].startDrag(mouse);
          return;
        }
      }
      gravities.push(new GravityPoint(e.clientX, e.clientY, G_POINT_RADIUS, {
        particles,
        gravities
      }));
    };

    const mouseUp = () => {
      for (let i = 0, len = gravities.length; i < len; i++) {
        if (gravities[i].dragging) {
          gravities[i].endDrag();
          break;
        }
      }
    };

    const doubleClick = () => {
      for (let i = gravities.length - 1; i >= 0; i--) {
        if (gravities[i].isMouseOver) {
          gravities[i].collapse();
          break;
        }
      }
    };

    const addParticle = num => {
      for (let i = 0; i < num; i++) {
        const p = new Particle(
          Math.floor(Math.random() * screenWidth - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
          Math.floor(Math.random() * screenHeight - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
          PARTICLE_RADIUS
        );
        p.addSpeed(Vector.random());
        particles.push(p);
      }
    };

    // Remove the unused removeParticle function
    // const removeParticle = num => {
    //   if (particles.length < num) num = particles.length;
    //   for (let i = 0; i < num; i++) {
    //     particles.pop();
    //   }
    // };

    window.addEventListener('resize', resize, false);
    resize();

    addParticle(250);

    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('dblclick', doubleClick, false);

    const loop = () => {
      context.save();
      context.fillStyle = BACKGROUND_COLOR;
      context.fillRect(0, 0, screenWidth, screenHeight);
      context.restore();

      gravities.forEach(g => {
        if (g.dragging) g.drag(mouse);
        g.render(context);
        if (g.destroyed) {
          gravities.splice(gravities.indexOf(g), 1);
        }
      });

      bufferCtx.save();
      bufferCtx.globalCompositeOperation = 'destination-out';
      bufferCtx.globalAlpha = 0.35;
      bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
      bufferCtx.restore();

      bufferCtx.save();
      bufferCtx.fillStyle = bufferCtx.strokeStyle = '#FF7F3E';
      bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
      bufferCtx.lineWidth = PARTICLE_RADIUS * 2;
      bufferCtx.beginPath();
      particles.forEach(p => {
        p.update();
        bufferCtx.moveTo(p.x, p.y);
        bufferCtx.lineTo(p._latest.x, p._latest.y);
      });
      bufferCtx.stroke();
      bufferCtx.beginPath();
      particles.forEach(p => {
        bufferCtx.moveTo(p.x, p.y);
        bufferCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      });
      bufferCtx.fill();
      bufferCtx.restore();

      context.drawImage(bufferCvs, 0, 0);

      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', mouseMove);
      canvas.removeEventListener('mousedown', mouseDown);
      canvas.removeEventListener('mouseup', mouseUp);
      canvas.removeEventListener('dblclick', doubleClick);
    };
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden z-0 pointer-events-auto">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <canvas ref={bufferCanvasRef} className="hidden" />
    </div>
  );
};

export default InteractiveBackground;
