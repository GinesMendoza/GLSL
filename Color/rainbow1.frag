// Can you make a rainbow using what we have learned so far?

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 red = vec3(1.000, 0.000, 0.000);
vec3 orange = vec3(1.000, 0.498, 0.000);
vec3 yellow = vec3(1.000, 1.000, 0.000);
vec3 green = vec3(0.000, 1.000, 0.000);
vec3 blue = vec3(0.000, 0.000, 1.000);
vec3 violet = vec3(0.545, 0.000, 1.000);

// unit = 1.0/6.0 = 0.166;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color;
    float x = st.x;
    
    if (x < 0.166) color = mix(red, orange, x/0.166);
    else if (x < 0.332) color = mix(orange, yellow, (x-0.166)/0.166);
    else if (x < 0.498) color = mix(yellow, green,  (x-0.332)/0.166);
    else if (x < 0.664) color = mix(green, blue, (x-0.498)/0.166);
    else if (x < 0.830) color = mix(blue, violet, (x-0.664)/0.166);
    else color = violet;
    
    gl_FragColor = vec4(color,1.0);
}