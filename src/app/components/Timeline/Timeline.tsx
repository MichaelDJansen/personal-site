import TimelineItem, { TTimelineItemProps } from "./TimelineItem/TimelineItem";

type TTimelineProps = {
    items: Array<TTimelineItemProps>
};
  
const Timeline: React.FC<TTimelineProps>  = ({ items }) => (
    <div className="timeline flex flex-col gap-3">
        {items.map(item => <TimelineItem {...item}/>)}
    </div>
);

export default Timeline;