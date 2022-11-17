import { useState, useEffect } from 'react';
import { Sections } from './../../api-calls';

const useTopics = (id, lang) => {
  const [topics, setTopics] = useState([]);
  const [markedTopics, setMarkedTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const { data, error } = await Sections.getTopics({
        sectionId: id,
        lang,
      });
      console.log(data);
      if (error) {
        // message.error('Something went wrong, please try again later');
      } else {
        setTopics(data);
      }
    };

    fetchTopics();
  }, [id]);

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
