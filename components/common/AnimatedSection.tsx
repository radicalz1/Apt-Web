import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section.tsx';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  // FIX: Made children optional to allow passing dangerouslySetInnerHTML as a prop.
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}

export const AnimatedSection = ({ children, as: Component = Section, ...props }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  // The 'as' prop allows us to use this animation wrapper with different semantic elements,
  // defaulting to the Section component. The ref is passed to the underlying component.
  // The props are destructured to pass them along, and we merge the classNames.
  const componentProps = {
    ...props,
    ref,
    className: `${props.className || ''} scroll-animate ${inView ? 'is-visible' : ''}`,
  };

  return React.createElement(Component, componentProps, children);
};