import React from 'react';

import tokens from '../../../static/enums/design_tokens.json';
import { capitalizeFirstChar } from '../../utils/stringUtils';
import classnames from '../../utils/classNames';
import s from './index.module.scss';

const Colors = () => {
  const getColorValue = (type, innerType, semanticLabel, theme) => {
    const colorValue =
      tokens['color-semantics'][theme][type][innerType][semanticLabel].value;
    if (colorValue.startsWith('#')) {
      return colorValue;
    }
    const [, colorName, shade] = colorValue.split('.');
    return tokens['color-primitives'][colorName][shade.replace('}', '')].value;
  };

  const renderColorBox = (type, innerType, semanticLabel, theme) => {
    const colorValue = getColorValue(type, innerType, semanticLabel, theme);
    return (
      <div
        style={{
          background: colorValue,
        }}
        className={classnames(s.colorCard, {})}
      >
        <div
          className={classnames(s.colorName, {
            [s.whiteText]: theme === 'light',
          })}
        >{`--${type}-${innerType}-${semanticLabel}`}</div>
        <div
          className={classnames(s.colorCode, {
            [s.whiteText]: theme === 'light',
          })}
        >
          {colorValue}
        </div>
      </div>
    );
  };

  return (
    <div className={s.colorsContainer}>
      {Object.entries(tokens['color-semantics'].light).map(
        ([type, properties]) =>
          Object.entries(properties).map(([innerType, innerProperties]) => (
            <section key={type}>
              <div className={s.sectionHeading}>
                {capitalizeFirstChar(type)}
              </div>
              <div className={s.sectionHeading}>
                {capitalizeFirstChar(innerType)}
              </div>
              <div className={s.themeHeader}>
                <div>Light</div>
                <div>Dark</div>
              </div>
              {Object.entries(innerProperties).map(([semanticLabel]) => (
                <div
                  key={`${type}-${innerType}-${semanticLabel}`}
                  className={s.colorsRow}
                >
                  {renderColorBox(type, innerType, semanticLabel, 'light')}
                  {renderColorBox(type, innerType, semanticLabel, 'dark')}
                </div>
              ))}
            </section>
          )),
      )}
    </div>
  );
};

export default Colors;
