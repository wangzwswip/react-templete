import React from "react";
import TagList from "./components/TagList";
import tagStyles from './TagsView.module.less'

const TagsView = () => {
  return (
    <div className={tagStyles.tagsViewContainer}>
      <TagList />
    </div>
  )
}

export default TagsView