import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AddIcon from '@mui/icons-material/Add';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import InventoryIcon from '@mui/icons-material/Inventory';
import FunctionsIcon from '@mui/icons-material/Functions';
import Groups2Icon from '@mui/icons-material/Groups2';
import PublicIcon from '@mui/icons-material/Public';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RecyclingIcon from '@mui/icons-material/Recycling';

const TimeLine = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);
        const timelineElements = timelineRef.current?.querySelectorAll(".vertical-timeline-element");

        timelineElements?.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const timelineData = [
        {
            className: 'vertical-timeline-element--work',
            date: '2020-01-15',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <AddBusinessIcon />,
            hTag: 'Company Founded',
            pTag: 'Our company was officially established with a mission to revolutionize the industry.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2020-06-01',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <InventoryIcon />,
            hTag: 'First Product Launch',
            pTag: 'Launched our flagship product, receiving positive feedback from early adopters.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2021-03-10',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <FunctionsIcon />,
            hTag: 'Seed Funding Secured',
            pTag: 'Raised $1.5 million in seed funding to accelerate product development.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2021-08-22',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <Groups2Icon />,
            hTag: 'Team Expansion',
            pTag: 'Grew the team to 50+ employees across engineering, sales, and marketing.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2022-02-05',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <AddIcon />,
            hTag: 'Series A Funding',
            pTag: 'Raised $10 million in Series A funding to expand market reach and operations.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2022-07-15',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <PublicIcon />,
            hTag: 'Global Expansion',
            pTag: 'Successfully launched operations in Europe and Asia.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2023-01-01',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <PaidIcon />,
            hTag: 'Reached 1 Million Users',
            pTag: 'Achieved a milestone of 1 million active users on our platform.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2023-06-18',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <EmojiEventsIcon />,
            hTag: 'Award Recognition',
            pTag: 'Received the Best Tech Startup Award at the Global Tech Conference.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2024-02-01',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <PrecisionManufacturingIcon />,
            hTag: 'New Product Release',
            pTag: 'Released a new product line with cutting-edge technology features.',
            hClassName: 'vertical-timeline-element-title',
        },
        {
            className: 'vertical-timeline-element--work',
            date: '2024-06-01',
            iconStyle: { background: "#4caf50", color: "#fff" },
            icon: <RecyclingIcon />,
            hTag: 'Sustainability Initiatives',
            pTag: 'Launched sustainability programs to reduce carbon footprint and improve ESG metrics.',
            hClassName: 'vertical-timeline-element-title',
        },
    ];

    return (
        <div className="verticalTimeline" ref={timelineRef}>
            <VerticalTimeline>
                {
                    timelineData?.map((time, index) => {
                        return (
                            <VerticalTimelineElement
                                className={time?.className}
                                date={time?.date}
                                iconStyle={time?.iconObject}
                                icon={time?.icon}
                            >
                                <h3 className={time?.hClassName}>{time?.hTag}</h3>
                                <p>{time?.pTag}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
};

export default TimeLine;