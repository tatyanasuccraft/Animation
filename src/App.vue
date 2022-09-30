  <script>
  //import PolyGraph from './components/PolyGraph.vue'
  import {pointValue, ellipseAnimation} from '@/util';
  
  export default {
    name: 'App',
    data: () => ({
      points: "20,20 20,60 60,60 60,20",
      coordinates: [
        {x: 20, y: 20, deg: 135},
        {x: 20, y: 60, deg: 225},
        {x: 60, y: 60, deg: 315},
        {x: 60, y: 20, deg: 45}
      ],
      ellipse: {
        cx: 100,
        cy: 240,
        ry: 40,
        rx: 30
      },
      isRotate: false,
      interval: null,
      isBubbling: false,
      bubbleInterval: null
    }),
    computed: {

    },
    methods: {
      rotate() {
        if(!this.isRotate) {
          this.interval = setInterval(() => {
            this.coordinates = pointValue(this.coordinates);
            let result =  '';
            for(let coordinate of this.coordinates) {
              result += `${coordinate.x},${coordinate.y} `;
            }
            this.points = result;
            this.isRotate = true;
          }, 200);
        } else {
          this.isRotate = false;
          clearInterval(this.interval);
        }
      },
      bubble() {
        if(!this.isBubbling) {
          this.bubbleInterval = setInterval(() => {
            this.ellipse = ellipseAnimation(this.ellipse);
            this.isBubbling;
          }, 300);
        } else {
          clearInterval(this.bubbleInterval);
          this.isBubbling = false;
        }
      },
      arcs() {
        var c = document.getElementById("firstArc");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(20, 20, 20, 11 * Math.PI / 18, 12.5 * Math.PI / 9);
        ctx.stroke();
      }
    }
  }
  </script>
  
  <template>
    <svg width="200" height="200" style="border: 1px solid #000000">
      <g>
        <polygon :points="points"></polygon>
      </g>
    </svg>

    <button @click="rotate">Rotate</button>

    <svg width="200" height="200" style="border: 1px solid #000000">
      <ellipse :cx="ellipse.cx" :cy="ellipse.cy" :rx="ellipse.rx" :ry="ellipse.ry"></ellipse>
    </svg>
    <button @click="arcs">Arc</button>
    <button @click="bubble">Bubble</button>

    <canvas id="firstArc" width="20" height="40"></canvas>
  </template>
  














  <style>
  polygon {
    fill: rgb(5, 33, 70);
    opacity: 0.75;
  }

  circle {
    fill: transparent;
    stroke: #999;
  }

  ellipse {
    fill: rgb(5, 33, 70);
  }
  
  text {
    font-size: 10px;
    fill: #666;
  }
  
  label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
  }
  
  #raw {
    position: absolute;
    top: 0;
    left: 300px;
  }
  </style>