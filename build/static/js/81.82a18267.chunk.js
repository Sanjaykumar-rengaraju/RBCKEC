"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[81],{3635:(t,e,o)=>{o.d(e,{A:()=>s});o(5043);var r=o(579);const s=t=>{let{text:e,height:o}=t;const s={1:"sm:text-xl",2:"sm:text-2xl",3:"sm:text-3xl",4:"sm:text-4xl",5:"sm:text-5xl",6:"sm:text-6xl",7:"sm:text-7xl",8:"sm:text-8xl",9:"sm:text-9xl"}[o]||"sm:text-3xl";return(0,r.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,r.jsx)("span",{className:`absolute mx-auto py-4 w-fit bg-gradient-to-r blur-xl from-teal-400 via-teal-500 to-teal-600 bg-clip-text font-extrabold text-transparent text-center select-none text-3xl ${s}`,children:e}),(0,r.jsx)("h1",{className:`relative py-4 w-fit bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text font-extrabold text-transparent text-center select-auto text-3xl ${s}`,children:e})]})}},3081:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var r=o(5043),s=o(9104),l=o(8711),n=o(9408),i=o(4718),a=o(579);const c=()=>{const t=(0,s.H)(i.B,"./model/finalRobot.glb"),e=r.useMemo((()=>new n.AnimationMixer(t.scene)),[t]);return r.useEffect((()=>{const o=t.animations.map((t=>e.clipAction(t)));return o.forEach((t=>t.play())),()=>{o.forEach((t=>t.stop()))}}),[t.animations,e]),(0,s.F)(((t,o)=>{e.update(o)})),(0,a.jsx)("primitive",{object:t.scene,position:[0,0,0],scale:[.8,.8,.8]})},x=()=>(0,a.jsxs)(l.Hl,{children:[(0,a.jsx)("directionalLight",{position:[10,10,10],intensity:10}),(0,a.jsx)(c,{})]});var p=o(3635),f=o(1529),m=o(3216);const d=f.Ay.div`
  --color: #2761c3;

  button {
    position: relative;
    width: 10rem;
    height: 4rem;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight:900;
    color: #fff;
    cursor: pointer;
  }

  .clip {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px #195480;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    animation: loopColor 3s infinite;
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: var(--arrowColor);
    top: 35%;
    width: 11%;
    height: 30%;
    will-change: transform, background-color;
    animation: loopArrowColor 3s infinite;
  }

  .leftArrow {
    left: -13.5%;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  .rightArrow {
    left: 102%;
    clip-path: polygon(100% 49%, 0 0, 0 100%);
  }

  button:hover .rightArrow {
    left: -15%;
    animation: slideRight 0.6s ease-in-out infinite alternate, loopArrowColor 3s infinite;
  }

  button:hover .leftArrow {
    left: 103%;
    animation: slideLeft 0.6s ease-in-out infinite alternate, loopArrowColor 3s infinite;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: var(--color);
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
    will-change: transform, box-shadow;
  }

  .rightTop {
    top: -1.98em;
    left: 91%;
  }

  .leftTop {
    top: -1.96em;
    left: -3.0em;
  }

  .leftBottom {
    top: 2.10em;
    left: -2.15em;
  }

  .rightBottom {
    top: 45%;
    left: 88%;
  }

  button:hover .clip {
    --color: #27c39f;
  }

  @keyframes loopColor {
    0% {
      --color: #2761c3;
    }
    25% {
      --color: #27c39f;
    }
    50% {
      --color: #ff9800;
    }
    75% {
      --color: #9c27b0;
    }
    100% {
      --color: #2761c3;
    }
  }

  @keyframes loopArrowColor {
    0% {
      --arrowColor: #2761c3;
    }
    25% {
      --arrowColor: #27c39f;
    }
    50% {
      --arrowColor: #ff9800;
    }
    75% {
      --arrowColor: #9c27b0;
    }
    100% {
      --arrowColor: #2761c3;
    }
  }

  @keyframes slideLeft {
    from {
      transform: translate(0px);
    }
    to {
      transform: translateX(10px);
    }
  }

  @keyframes slideRight {
    from {
      transform: translate(0px);
    }
    to {
      transform: translateX(-10px);
    }
  }
`,h=()=>{const t=(0,m.Zp)();return(0,a.jsx)(d,{children:(0,a.jsxs)("button",{onClick:()=>{t("/upc-events")},children:["R E G I S T E R",(0,a.jsxs)("div",{className:"clip",children:[(0,a.jsx)("div",{className:"corner leftTop"}),(0,a.jsx)("div",{className:"corner rightBottom"}),(0,a.jsx)("div",{className:"corner rightTop"}),(0,a.jsx)("div",{className:"corner leftBottom"})]}),(0,a.jsx)("span",{className:"arrow rightArrow"}),(0,a.jsx)("span",{className:"arrow leftArrow"})]})})},g=()=>(0,a.jsxs)("div",{className:"relative w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent",id:"home",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center px-6 md:px-10 gap-4 sm:gap-3",children:[["ROBOTICS CLUB OF KEC","Kongu Engineering College","For the Students, By the Students."].map(((t,e)=>(0,a.jsx)(p.A,{text:t,height:5},e))),(0,a.jsx)("div",{className:"pointer-events-auto flex justify-center",children:(0,a.jsx)(h,{})}),(0,a.jsx)("span",{className:"text-teal-400 flex justify-center",children:"Event Date : 11-MAR-2025"})]}),(0,a.jsx)("div",{className:"order-first pointer-events-none",children:(0,a.jsx)(x,{})})]}),u=(0,r.memo)(g)}}]);
//# sourceMappingURL=81.82a18267.chunk.js.map