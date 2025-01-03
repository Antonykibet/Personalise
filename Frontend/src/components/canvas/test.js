import React, { useEffect, useRef } from 'react';
import { Canvas } from 'fabric';

export default function CanvasTest() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new Canvas(canvasRef.current);// Check if jsonString exists
        
        const json = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}'
        canvas.loadFromJSON( json )
            .then( r => {
            canvas.renderAll()
            })
        return () => { // Cleanup on unmount
            canvas.dispose();
        };
    }, []); // Empty dependency array ensures this runs only once on mount and unmount

    return <canvas ref={canvasRef} width="500" height="300" />;
}