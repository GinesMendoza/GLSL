// Use a shaping function together with the conversion function from HSB to RGB to expand a particular hue value and shrink the rest.
#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

// http://www.flong.com/texts/code/shapers_poly/
float blinnWyvillCosineApproximation (float x){
  float x2 = x*x;
  float x4 = x2*x2;
  float x6 = x4*x2;
  
  float fa = ( 4.0/9.0);
  float fb = (17.0/9.0);
  float fc = (22.0/9.0);
  
  float y = fa*x6 - fb*x4 + fc*x2;
  return y;
}

// http://www.iquilezles.org/www/articles/functions/functions.htm
float impulse( float k, float x )
{
    float h = k*x;
    return h*exp(1.0-h);
}

// http://www.iquilezles.org/www/articles/functions/functions.htm
float expStep( float x, float k, float n )
{
    return exp( -k*pow(x,n) );
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    // Use polar coordinates instead of cartesian
    vec2 toCenter = vec2(0.5)-st;
    float angle = atan(toCenter.y,toCenter.x);
    float radius = length(toCenter)*2.0;

    // Map the angle (-PI to PI) to the Hue (from 0 to 1)
    // and the Saturation to the radius
    float factor0 = blinnWyvillCosineApproximation((angle/TWO_PI)+0.5);
    
    float factor1 = impulse(0.7, (angle/TWO_PI)+0.5);
    
    float factor2 = expStep((angle/TWO_PI)+0.5, 2.9, 1.7);
    
    color = hsb2rgb(vec3(factor0,radius,1.0));

    gl_FragColor = vec4(color,1.0);
}
