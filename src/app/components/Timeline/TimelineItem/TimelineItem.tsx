import Tag from "../../Tag/Tag";

export type TTimelineItemProps = {
    companyName: string,
    companyYears: string,
    companyDuration: string,
    jobPosition: string,
    jobDescription: string,
    jobSkills: Array<string>,
};
  
const TimelineItem: React.FC<TTimelineItemProps>  = ({ 
    companyName, 
    companyDuration, 
    companyYears, 
    jobDescription, 
    jobPosition, 
    jobSkills
 }) => (
    <div className="timeline-item grid grid-cols-[1fr_30px_2fr]">
        <div className='left-hand-side flex flex-col items-end text-right pr-2'>
            <strong className='company-name'>{companyName}</strong>
            <p className="company-duration">{companyYears}</p>
            <p className="company-years">{companyDuration}</p>
        </div>
        <div className="divider w-8">
            <span className="circle h-4 w-4 bg-white border border-black rounded-[50%] inline-block absolute z-10" />
            <div className="vertical-line border-l border-l-black h-full relative top-4 left-2 "/>
        </div>
        <div className="right-hand-side">
            <strong className="company-position">{jobPosition}</strong>
            <p className="company-description">
                {jobDescription}
            </p>
            <div className="company-skills flex gap-2 flex-wrap mt-2">
                {jobSkills.map(skill => <Tag text={skill}/>)}
            </div>
        </div>
    </div>
);

export default TimelineItem;