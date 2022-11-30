const formatTopics = (_topics) => {
  return _topics.map((t) => ({
    id: t.id,
    content: {
      title: t.content.title,
      content: t.content.content,
      resources:
        t.content.resources && t.content.resources.length
          ? t.content.resources.map((r) => {
              if (r.type === 'CUSTOM') {
                return {
                  category: r.category,
                  key: r.key,
                  type: r.type,
                };
              }
              return {
                label: r.label,
                url: r.url,
                type: 'EXTERNAL',
              };
            })
          : [],
      tip1: t.content.tip1,
      tip2: t.content.tip2,
    },
  }));
};

export default formatTopics;
