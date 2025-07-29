import Tag from "../../Tag/Tag";

export type TTimelineItemProps = {
    companyName: string,
    companyStartDate: Date,
    companyEndDate?: Date,
    jobPosition: string,
    jobDescription: string,
    jobSkills: Array<string>,
};

const getCompanyDuration = (startDate: Date, endDate: Date = new Date()): string => {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    
    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    const yearText = years === 1 ? 'year' : 'years';
    const monthText = months === 1 ? 'month' : 'months';
    
    if (years > 0 && months > 0) {
        return `${years} ${yearText} ${months} ${monthText}`;
    } else if (years > 0) {
        return `${years} ${yearText}`;
    } else if (months > 0) {
        return `${months} ${monthText}`;
    } else {
        return 'Less than 1 month';
    }
};

const TimelineItem: React.FC<TTimelineItemProps>  = ({ 
    companyName, 
    companyStartDate,
    companyEndDate,
    jobDescription, 
    jobPosition, 
    jobSkills
 }) => (
    <div className="timeline-item grid grid-cols-[1fr_30px_2fr]">
        <div className='left-hand-side flex flex-col items-end text-right pr-2'>
            <strong className='company-name'>{companyName}</strong>
            <p className="company-duration">{`${companyStartDate.getFullYear()} - ${companyEndDate ? companyEndDate.getFullYear() : 'Present'}`}</p>
            <p className="company-years">{getCompanyDuration(companyStartDate, companyEndDate)}</p>
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
                {jobSkills.map((skill, index) => <Tag key={index} text={skill} />)}
            </div>
        </div>
    </div>
);

export default TimelineItem;