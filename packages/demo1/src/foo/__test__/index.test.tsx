import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Foo from '../index';

describe('foo', () => {
  it('should render the Foo', () => {
    const wrapper = render(<Foo title="Hello dumi!" />);
    expect(wrapper.getByTestId('foo').textContent).toBe('Hello dumi!');
    expect(wrapper.getByTestId('foo')).toHaveClass('foo-title');
  });
});
