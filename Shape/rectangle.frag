/* 
1.Change the size and proportions of the rectangle.
2.Experiment with the same code but using smoothstep() instead of step(). Note that by changing values, you can go from blurred edges to elegant smooth borders.
3.Do another implementation that uses floor().
4.Choose the implementation you like the most and make a function of it that you can reuse in the future. Make your function flexible and efficient.
5.Make another function that just draws the outline of a rectangle.
6.How do you think you can move and place different rectangles in the same billboard? If you figure out how, show off your skills by making a composition of rectangles and colors that resembles a Piet Mondrian painting.
*/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 4.5.
bool isinrec(vec2 bl, vec2 tr, vec2 st)
{
    vec2 s1 = step(bl,st);
    vec2 s2 = step(tr,1.0-st);
    return s1.x*s1.y*s2.x*s2.y == 0.0 ? false : true;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
 
 #if 0
    // 1.2.
	float proportion = 0.1;
    vec2 bl = smoothstep(vec2(0.0), vec2(proportion),st);
    vec2 tr = smoothstep(vec2(0.0), vec2(proportion),1.0-st);

    // 3.
    vec2 bl = floor(st*2.0);
    vec2 tr = floor(8.0*(1.0-st));

    // float pct = bl.x * bl.y * tr.x * tr.y;
    //color = vec3(pct);
#endif
    // 6.
    vec2 bl = vec2(0.2, 0.4);
    vec2 tr = vec2(0.1, 0.3);
    
    vec2 bl1 = vec2(0.1, 0.1);
    vec2 tr1 = vec2(0.35, 0.65);

    if(isinrec(bl, tr, st))
        color = vec3(0.9,0.6,0.3);
    
    if(isinrec(bl1, tr1, st))
        color = vec3(0.1, 0.1, 0.7);

    gl_FragColor = vec4(color,1.0);
}