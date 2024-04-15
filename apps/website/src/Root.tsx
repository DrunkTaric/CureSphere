import { Toaster } from './components/ui/toast';
import type { ComponentProps } from 'solid-js';
import Nav from "./components/blocks/nav"

const Root: ComponentProps<any> = ({children, ...props}: {children: HTMLElement[]}) => {
  return (
    <div class="root">
      <div class="wrapper">
        <Nav/>
        <div {...props}>
          {children}
        </div>
        <Toaster/>
      </div>
    </div>
  );
};

export default Root;
