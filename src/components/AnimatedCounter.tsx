import React, { useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup'; // Using useCountUp for more control if needed

interface AnimatedCounterProps {
  endValue: number;
  startValue?: number;
  duration?: number; // in seconds
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
  separator?: string;
  enableScrollSpy?: boolean; // Trigger animation on scroll
  scrollSpyOnce?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  startValue = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className = 'text-3xl font-bold',
  decimals = 0,
  separator = ',',
  enableScrollSpy = true,
  scrollSpyOnce = true,
}) => {
  const countUpRef = React.useRef<HTMLSpanElement>(null);
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: startValue,
    end: endValue,
    duration: duration,
    prefix: prefix,
    suffix: suffix,
    separator: separator,
    decimals: decimals,
    enableScrollSpy: enableScrollSpy,
    scrollSpyOnce: scrollSpyOnce,
    scrollSpyDelay: 100, // ms
  });

  // useCountUp's scrollSpy might not always re-trigger on prop changes as expected,
  // especially if the component re-renders but is already in view.
  // This effect ensures if endValue changes, and it's already in view, it might re-animate.
  // However, react-countup's scrollSpyOnce might prevent re-animation if set to true.
  // For simple cases, <CountUp> component is easier. useCountUp offers more explicit control.
  useEffect(() => {
    console.log("AnimatedCounter: endValue or scrollSpy setting changed. Resetting and starting animation for", endValue);
    if (countUpRef.current) { // Check if ref is attached
        reset(); // Reset previous animation state
        start(); // Start new animation
    }
  }, [endValue, startValue, duration, prefix, suffix, decimals, separator, enableScrollSpy, scrollSpyOnce, start, reset]);


  console.log(`Rendering AnimatedCounter: to ${endValue}, from ${startValue}`);

  // Option 1: Using the CountUp component directly (simpler for basic use)
  // return (
  //   <CountUp
  //     start={startValue}
  //     end={endValue}
  //     duration={duration}
  //     prefix={prefix}
  //     suffix={suffix}
  //     className={className}
  //     decimals={decimals}
  //     separator={separator}
  //     enableScrollSpy={enableScrollSpy}
  //     scrollSpyOnce={scrollSpyOnce}
  //     scrollSpyDelay={100}
  //   />
  // );

  // Option 2: Using useCountUp hook (more control if needed, e.g., manually starting/pausing)
  // The hook requires a ref on a span element.
  return (
    <span ref={countUpRef} className={className}>
      {/* Content will be rendered by useCountUp */}
    </span>
  );
};
export default AnimatedCounter;