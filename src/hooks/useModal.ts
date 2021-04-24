import { useState, useCallback } from 'react';
import { Entity } from '../types';

export default () => {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState<Entity | undefined>(undefined);

  const show = useCallback((dataSource: Entity) => {
    setVisible(true);
    setDataSource(dataSource);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
    setDataSource(undefined);
  }, []);

  return {
    visible,
    dataSource,
    show,
    hide,
  }
}