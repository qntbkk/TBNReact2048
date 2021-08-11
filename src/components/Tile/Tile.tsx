import { createElement, FC } from 'react';
import { getTileColor } from '../../utils/common';
import StyledTile, { StyledTileProps } from './StyledTile';
import StyledTileValue from './StyledTileValue';

export interface TileProps extends StyledTileProps {
  isNew?: boolean;
  isMerging?: boolean;
}

const Tile: FC<TileProps> = ({
  value,
  x,
  y,
  width,
  height,
  isNew = false,
  isMerging = false,
}) => (
  <StyledTile value={value} x={x} y={y} width={width} height={height}>
    <StyledTileValue
      value={value}
      backgroundColor={getTileColor(value)}
      isNew={isNew}
      isMerging={isMerging}
    >
      {value}
    </StyledTileValue>
  </StyledTile>
);

export default Tile;
