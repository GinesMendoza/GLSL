// Can you make a rainbow using what we have learned so far?

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

// unit = 1.0/6.0 = 0.166;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color;
    float x = st.x;
    
     // r
    if (x < 0.498) color.r = 1.0;
    else if (x < 0.664) color.r = smoothstep(0.0, 1.0, 1.0-(x-0.498)/0.166);
    else if (x < 0.830) color.r = 0.0;
    else color.r = smoothstep(0.0, 0.545, (x-0.830)/0.166); 
   
    // g
    if (x < 0.166) color.g = 0.0;
	else if (x < 0.498) color.g = smoothstep(0.0, 1.0, (x-0.166)/0.332);
    else if (x < 0.664) color.g = 1.0;
    else if (x < 0.830) color.g = smoothstep(0.0, 1.0, 1.0-(x-0.664)/0.166);
    else color.g = 0.0;
    
    // b 
    if (x < 0.664) color.b = 0.0;
    else if (x < 0.830) color.b = smoothstep(0.0, 1.0, (x-0.664)/0.166);
    else color.b = 1.0;
    
    gl_FragColor = vec4(color, 1.0);
}