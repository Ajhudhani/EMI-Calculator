import React, {useState} from "react";
import './Emicalculator.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Emicalculator() {

    const[loanAmount, setloanAmount] = useState(100000);
    const[interest, setinterest] = useState(10);
    const[loanTenure, setloanTenure] = useState(60);
    const [emi, setEmi] = useState(2125);
    const [totalAmount, settotalAmount] = useState(127500);    
    const [totalAmountofInterest, settotalAmountofInterest] = useState(27500);
    
    
    function handleCalculate() {
        const intrRate = interest/1200;
        const emi = loanTenure ? Math.round(loanAmount * intrRate / (1 - (Math.pow(1/(1 + intrRate), loanTenure)))): 0;
        setEmi(emi);        
        const totalAmount = emi * loanTenure;
        settotalAmount(totalAmount);
        const totalAmountofInterest = totalAmount - loanAmount;
        settotalAmountofInterest(totalAmountofInterest);
        
    }
    return(
        <div>
        <div className="loan-calculator">
            <div className="left  ">
                <h2>EMI calculator</h2>
                <div className="left-side">
                    <div className="group">
                        <div className="title">Loan Amount</div>
                        <input className="loan-amount" type="text" value={loanAmount} onChange={e => setloanAmount(e.target.value)}  ></input>                  
                    </div>

                    <div className="group">
                        <div className="title">Interest Rate</div>
                        <input className="interest-rate"  type="text" value={interest} onChange={e => setinterest(e.target.value)}  ></input>
                    </div>

                    <div className="group">
                        <div className="title">Tenure (in months)</div>
                        <input className="loan-tenure"  type="number" value={loanTenure} onChange={e => setloanTenure(e.target.value)}  ></input>
                    </div>
                    <div className="group">
                    <button className="calculate-btn" onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>            
            </div>
            
            <div className="center  ">
                    <h2>Output Details</h2>
                    <div className="loan-emi">
                        <h3>Loan EMI</h3>
                        <div className="value">{emi}</div>   
                    </div>
                    <div className="total-interest">
                        <h3>Total Interest Payable</h3>
                        <div className="value">{totalAmountofInterest}</div>
                    </div>
                    <div className="total-amount">
                        <h3>Total Amount Payable</h3>
                        <div className="value">{totalAmount}</div>
                    </div>
            </div>
             
            <div className="right  ">
                <h2>Graphical Details</h2>
                <div className="pie-chart">
                <Pie data={{
                        labels : ['Total Interest', 'Total Amount'],
                        datasets : [{
                            data : [totalAmountofInterest, totalAmount],
                            backgroundColor : ['#5A2870', '#8B3FB2'],
                            borderWidth: 5,
                            
                        }]
                    }}
                    width={500}
                    height={500}
                    />
                </div>
            </div>                                  
        </div>   

        </div>
        
        
    )
}