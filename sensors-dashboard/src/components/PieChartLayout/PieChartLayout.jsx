import React from 'react'
import './PieChartLayout.css';
import { PieChart, useDrawingArea } from '@mui/x-charts';
import styled from '@emotion/styled';


const PieChartLayout = ({title="text",value=0}) => {

    const StyledText = styled('text')(({ theme }) => ({
        fill: '#485FB2',
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: '1.5rem',
        fontFamily:'Manrope',
        fontStyle:'normal',
        fontWeight:'300',
        lineHeight:'normal'
    }));
    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }
    return (
        <>
            <div className='accPanel-container-pie'>
                <div className='accPanel-container-pie-title'>
                    { title }
                </div>

                <PieChart
                    colors={['#89C6FF', '#485FB2']}
                    legend={{ hidden: true }}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    series={[
                        {
                            data: [
                                { value: 80, color: '#89C6FF' },
                                { value: 20, color: '#485FB2' },

                            ],
                            innerRadius: 50,
                            outerRadius: 65,
                            paddingAngle: 0,
                            cornerRadius: 0,
                            startAngle: -140,
                            endAngle: 140,

                        }
                    ]}



                >
                    <PieCenterLabel>
                        { value } m/s
                    </PieCenterLabel>
                </PieChart>

            </div>
        </>
    )
}

export default PieChartLayout;