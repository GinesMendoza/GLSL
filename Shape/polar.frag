/*
1.Animate these shapes.
2.Combine different shaping functions to cut holes in the shape to make flowers, snowflakes and gears.
3.Use the plot() function we were using in the Shaping Functions Chapter to draw just the contour.
*/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-st;

    float r = length(pos)*2.0;
    float a = atan(pos.y,pos.x);
    float f = cos(a*3.);

    // f = abs(cos(a*3.));
    // f = abs(cos(a*2.5))*.5+.3;
    // f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
     f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

#if 0
	// 1.
	a += u_time;
	r *= sin(u_time);
	f *= sin(u_time);
	// 2.
	color -= vec3(1.0-smoothstep(0.27, 0.3, r));
	// 3.
 	float pct = plot(st,f);
    color += (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
#endif

    color = vec3( 1.-smoothstep(f,f+0.02,r) );

    gl_FragColor = vec4(color, 1.0);
}