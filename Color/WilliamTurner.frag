// Compose a gradient that resembles a William Turner sunset
// Animate a transition between a sunrise and sunset using u_time.

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.000, 0.633, 0.224);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float x = st.x;
    float y = 1.0 - st.y;
    
    vec3 pct = vec3(sin(u_time) * sqrt(x*x + y*y));
    
    vec3 color = mix(colorA, colorB, pct);
    
    gl_FragColor = vec4(color, 1.0);
}