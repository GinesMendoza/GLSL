#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
	vec2 mouse = u_mouse.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

	float radius = sqrt(pow(st.x-mouse.x, 2.0) + pow(st.y-mouse.y, 2.0));
	float edge = sin(u_time)/2.0+0.5;
	if (radius < edge && radius > edge-0.1)
		color = vec3(1.0);

    gl_FragColor = vec4(color,1.0);
}