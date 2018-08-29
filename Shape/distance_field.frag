/*
1.Use step() to turn everything above 0.5 to white and everything below to 0.0.
2.Inverse the colors of the background and foreground.
3.Using smoothstep(), experiment with different values to get nice smooth borders on your circle.
4.Once you are happy with an implementation, make a function of it that you can reuse in the future.
5.Add color to the circle.
6.Can you animate your circle to grow and shrink, simulating a beating heart? (You can get some inspiration from the animation in the previous chapter.)
7.What about moving this circle? Can you move it and place different circles in a single billboard?
8.What happens if you combine distances fields together using different functions and operations?
9.Make three compositions using this technique. If they are animated, even better!
*/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.0);
    float pct = distance(st, vec2(0.5));

#if 0
	// 1.
	pct = step(0.5, pct);
	// 2.
	pct = 1.0 - pct;
	// 3.
	pct = smoothstep(0.0, 0.5, pct);
	// 5.6.
	color = (1.0-pct) * vec3(1.0, 0.1, 0.1) * (sin(2.0*3.14*u_time));
	// 7.8.9.
	pct = min(pct, distance(st, vec2(0.1)));
	pct = min(pct, distance(st, vec2(0.8, 0.7)));
	pct = distance(st,vec2(0.4)) + distance(st,vec2(0.6));
	pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
	pct = min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
	pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
#endif
	pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));

	color = vec3(pct);

	gl_FragColor = vec4(color, 1.0);
}