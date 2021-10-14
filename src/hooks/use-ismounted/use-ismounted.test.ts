import { renderHook } from '@testing-library/react-hooks';
import { useIsMounted } from '..';

describe('useIsMounted', () => {
  test('should be truthy', () => {
    const isMounted = renderHook(() => useIsMounted());

    expect(isMounted).toBeTruthy();
  });
});
