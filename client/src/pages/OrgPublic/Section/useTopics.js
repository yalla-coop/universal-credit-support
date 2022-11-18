import { useState, useEffect } from 'react';
import { Sections } from '../../../api-calls';
import { message } from 'antd';

const useTopics = (id, resources) => {
  const [topics, setTopics] = useState([]);
  const [markedTopics, setMarkedTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      const { data, error } = await Sections.getTopics({
        sectionId: id,
      });
      if (error) {
        message.error('Something went wrong, please try again later');
      } else {
        const replacedData = data.map((topic) => ({
          ...topic,
          content: {
            ...topic.content,
            resources: topic?.content?.resources
              ?.map((resource) => {
                if (resource.type === 'CUSTOM') {
                  return resources?.find((r) => r.key === resource.key);
                }
                return resource;
              })
              .filter((r) => !!r),
          },
        }));

        setTopics(replacedData);
      }
    };

    fetchTopics();
  }, [id, resources]);

  useEffect(() => {
    const markedTopicsFromStorage =
      JSON.parse(localStorage.getItem('markedToggles')) || [];
    setMarkedTopics(markedTopicsFromStorage);
  }, []);

  const toggleMark = (id) => {
    const newMarkedTopics = markedTopics.includes(id)
      ? markedTopics.filter((topicId) => topicId !== id)
      : [...markedTopics, id];
    setMarkedTopics(newMarkedTopics);
    localStorage.setItem('markedToggles', JSON.stringify(newMarkedTopics));
  };
  const topicsWithMarked = topics.map((topic) => ({
    ...topic,
    marked: markedTopics.includes(topic.id),
  }));
  const sortedTopics = topicsWithMarked.sort((a, b) => {
    if (a.marked && !b.marked) return -1;
    if (!a.marked && b.marked) return 1;
    return 0;
  });

  return {
    topics: sortedTopics,
    toggleMark,
  };
};

export default useTopics;
