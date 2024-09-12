export function transformImageUrl(url, params) {
    if (typeof url !== 'string') {
      throw new TypeError('URL must be a string');
    }
    
    const baseUrl = url.startsWith('http') ? url : `https:${url}`;
    const queryParams = new URLSearchParams(params).toString();
    return `${baseUrl}?${queryParams}`;
  }
  