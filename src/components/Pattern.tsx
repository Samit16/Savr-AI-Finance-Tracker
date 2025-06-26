
import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Changed from -1 to lift it above the background */
    opacity: 0.15; /* Reduced from 0.3 to 0.15 for better readability */
    /* control size */
    --u: 5px;
    --c1: hsl(240 60% 75%);
    --c2: hsl(240 100% 60%);
    --c3: hsl(140 50% 70%);
    --gp: 50% / calc(var(--u) * 16.9) calc(var(--u) * 12.8);
    background: conic-gradient(
          from 122deg at 50% 85.15%,
          var(--c2) 0 58deg,
          var(--c3) 0 116deg,
          #fff0 0 100%
        )
        var(--gp),
      conic-gradient(from 122deg at 50% 72.5%, var(--c1) 0 116deg, #fff0 0 100%)
        var(--gp),
      conic-gradient(from 58deg at 82.85% 50%, var(--c3) 0 64deg, #fff0 0 100%)
        var(--gp),
      conic-gradient(
          from 58deg at 66.87% 50%,
          var(--c1) 0 64deg,
          var(--c2) 0 130deg,
          #fff0 0 100%
        )
        var(--gp),
      conic-gradient(from 238deg at 17.15% 50%, var(--c2) 0 64deg, #fff0 0 100%)
        var(--gp),
      conic-gradient(
          from 172deg at 33.13% 50%,
          var(--c3) 0 66deg,
          var(--c1) 0 130deg,
          #fff0 0 100%
        )
        var(--gp),
      linear-gradient(98deg, var(--c3) 0 15%, #fff0 calc(15% + 1px) 100%)
        var(--gp),
      linear-gradient(-98deg, var(--c2) 0 15%, #fff0 calc(15% + 1px) 100%)
        var(--gp),
      conic-gradient(
          from -58deg at 50.25% 14.85%,
          var(--c3) 0 58deg,
          var(--c2) 0 116deg,
          #fff0 0 100%
        )
        var(--gp),
      conic-gradient(from -58deg at 50% 28.125%, var(--c1) 0 116deg, #fff0 0 100%)
        var(--gp),
      linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);
  }

  .dark .container {
    --c1: hsl(240 50% 20%);
    --c2: hsl(240 100% 65%);
    --c3: hsl(140 45% 30%);
    opacity: 0.1; /* Reduced from 0.2 to 0.1 for dark mode */
  }
`;

export default Pattern;
