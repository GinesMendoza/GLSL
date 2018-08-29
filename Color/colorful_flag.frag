// Use the step() function to create a colorful flag

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec3 color = vec3(step(sin(1.5*u_time), 1.0-sqrt(st.y*st.y + st.x*st.x)), 
                      step(0.3, st.y), 
                      step(0.6, st.y));
    
    gl_FragColor = vec4(color,1.0);
}
