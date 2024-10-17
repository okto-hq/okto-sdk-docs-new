import React from "react";

export const ImageGrid = ({ children, columns }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '20px',
    marginTop: '20px',
  }}>
    {children}
  </div>
);

export const DownloadLinks = ({ svg, png }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '8px',
  }}>
    <a href={svg} download style={{ color: '#0000FF', textDecoration: 'none', fontSize: '14px' }}>SVG</a>
    <a href={png} download style={{ color: '#0000FF', textDecoration: 'none', fontSize: '14px' }}>PNG</a>
  </div>
);

// New component to wrap each item
export const AssetItem = ({ children, maxWidth = '100%' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: maxWidth,
    margin: '0 auto',
  }}>
    {React.Children.map(children, child => {
      if (child.type === 'h3') {
        return React.cloneElement(child, {
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textAlign: 'center',
          }
        });
      }
      if (child.type === 'img') {
        return (
          <div style={{
            backgroundColor: '#9ca3af',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            aspectRatio: '16/9',
          }}>
            {React.cloneElement(child, {
              style: {
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }
            })}
          </div>
        );
      }
      return child;
    })}
  </div>
);