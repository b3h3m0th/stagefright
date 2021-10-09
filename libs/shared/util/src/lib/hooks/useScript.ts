import { useEffect } from 'react';

export function useScript(url: string, charset = 'utf-8') {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.charset = charset;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}

export default useScript;
