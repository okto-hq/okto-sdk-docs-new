import React, { ReactNode, CSSProperties } from "react";

interface ImageGridProps {
  children: ReactNode;
  columns: number;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ children, columns }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '20px',
    marginTop: '20px',
  }}>
    {children}
  </div>
);

interface DownloadLinksProps {
  svg: string;
  png: string;
}

export const DownloadLinks: React.FC<DownloadLinksProps> = ({ svg, png }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '8px',
  }}>
    <a href={svg} download style={{ color: '#4B5563', textDecoration: 'none', fontSize: '14px', border: '1px solid #4B5563', borderRadius: '4px', padding: '4px 8px', backgroundColor: '#F3F4F6'}}>SVG</a>
    <a href={png} download style={{ color: '#4B5563', textDecoration: 'none', fontSize: '14px', border: '1px solid #4B5563', borderRadius: '4px', padding: '4px 8px', backgroundColor: '#F3F4F6' }}>PNG</a>
  </div>
);

interface AssetItemProps {
  children: ReactNode;
  maxWidth?: string;
}

export const AssetItem: React.FC<AssetItemProps> = ({ children, maxWidth = '100%' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: maxWidth,
    margin: '0 auto',
  }}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === 'h3') {
        // Cast child as React element with specific props (HTMLHeadingElement)
        return React.cloneElement(child as React.ReactElement<JSX.IntrinsicElements['h3']>, {
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textAlign: 'center',
          } as CSSProperties, // Explicit type assertion
        });
      }
      if (React.isValidElement(child) && child.type === 'img') {
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
            {React.cloneElement(child as React.ReactElement<JSX.IntrinsicElements['img']>, {
              style: {
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              } as CSSProperties,
            })}
          </div>
        );
      }
      return child;
    })}
  </div>
);
