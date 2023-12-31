import { useFrame } from '@react-three/fiber';
import { Grid, Hex } from 'honeycomb-grid';
import { ReactNode, useRef } from 'react';
import { CanvasTexture, DoubleSide } from 'three';
import drawHexagons from '../drawing/drawHexagons';
import { FieldContext } from './field.context';

export function Field({
  grid,
  children,
}: {
  grid: Grid<Hex>;
  children?: ReactNode;
}) {
  // const canvasRef = useRef(document.createElement('canvas'));
  // canvasRef.current.width = grid.pixelWidth;
  // canvasRef.current.height = grid.pixelHeight;
  // const textureRef = useRef<CanvasTexture | null>(null);
  // const contextRef = useRef(canvasRef.current.getContext('2d'));
  // document.body.appendChild(canvasRef.current);

  // useFrame(({ clock }) => {
  //   canvasRef.current.width = grid.pixelWidth;
  //   canvasRef.current.height = grid.pixelHeight;

  //   let ctx = contextRef.current;

  //   if (ctx) {
  //     ctx.clearRect(0, 0, grid.pixelWidth, grid.pixelHeight);

  //     // Replace drawHexagons with your own function for drawing hexagons
  //     drawHexagons(ctx, grid);
  //   }

  //   if (textureRef.current) {
  //     textureRef.current.needsUpdate = true;
  //   }
  // });

  return (
    <FieldContext.Provider value={{ grid }}>
      <group>
        <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
          <planeBufferGeometry args={[grid.pixelWidth, grid.pixelHeight]} />
          <meshBasicMaterial side={DoubleSide} color={0x00ff00}>
            {/* <canvasTexture
              ref={textureRef}
              attach="map"
              image={canvasRef.current}
            /> */}
          </meshBasicMaterial>
        </mesh>
        {children}
      </group>
    </FieldContext.Provider>
  );
}
