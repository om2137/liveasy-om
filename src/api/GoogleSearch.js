import axios from 'axios';

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
      params: {
        key: 'AIzaSyCeJ6TQqOXZoQaESvr0R1gAJhx2543sVL0',
        cx: 'e257cb9e8079d4ef2',
        q: term,
      },
    }
  );

  return data;
};
