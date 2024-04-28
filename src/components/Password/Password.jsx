// import { useState, useCallback, useEffect,useRef} from 'react'
// import { Link , NavLink } from 'react-router-dom'


// function Password() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed,setNumberAllowed]=useState(false);
//   const [charAllowed,setCharAllowed]=useState(false);
//   const [password,setPassword]=useState("")


//   // useRef hook
//   const passwordRef=useRef(null)

//   const passwordGenerator=useCallback(()=>{
//     let pass=""
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(numberAllowed) str+="0123456789"
//     if(charAllowed) str+="&%$#@+?"


//     for(let i=1;i<=length;i++){
//       let char=Math.floor(Math.random()*str.length+1)
//       pass+=str.charAt(char)
//     }

//     setPassword(pass)    

//   },[length,numberAllowed,charAllowed,setPassword])         //this is used for optimisation,keep the things in cache memory


//   const copyPasswordToClipBoard=useCallback(()=>{
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0-101);
//     window.navigator.clipboard.writeText(password)
//   },[password])


//   useEffect(()=>{
//     passwordGenerator()
//   },[length,numberAllowed,charAllowed,passwordGenerator])        //callback + dependency array 


//   // passwordGenerator()      // this will give an error that react limits the number of iterations to prevent an infinite loop ,so we need the useEffect hook
//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
//         <h1>Password Generator</h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input 
//           type="text"
//           value={password}
//           className='outline-none w-full py-1 px-3 '
//           placeholder='password'
//           readOnly
//           ref={passwordRef} />
//           <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
//             copy
//           </button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input type="range"
//             min={6}
//             max={100}
//             value={length}
//             className='cursor-pointer'
//             onChange={(e)=>{setLength(e.target.value)}}
//             />
//             <label>Length:{length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input type="checkbox"
//             defaultChecked={numberAllowed}
//             id='numberInput'
//             onChange={()=>{
//               setNumberAllowed((prev)=>!prev)
//             }} />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>

//           <div className="flex items-center gap-x-1">
//             <input type="checkbox"
//             defaultChecked={charAllowed}
//             id='charInput'
//             onChange={()=>{
//               setCharAllowed((prev)=>!prev)
//             }} />
//             <label htmlFor="charInput">Characters</label>
//           </div>
//         </div>
//       </div> <br /><br />
//       <div className='font-bold'>
//       <h1 className="text-4xl  "> Save Your Credentials </h1> <br />
//       <p>To save your credentials , copy the above genetared passwowd and Follow the below links
//       </p>
//       <br />
//       <Link to="/encrypted">
//       <button className='bg-red-700 text-white text-2xl rounded-lg p-3 m-2'>
//         Save Credentials with Encryption
//       </button>
//       </Link>
// <br />
//       <Link to="/unencrypted">
//       <button  className='bg-red-700 text-white text-2xl rounded-lg p-3 m-2'>
//         Save Credentials without Encryption
//       </button>
//       </Link>
//       </div><br />
      
//     </>
//   )
// }

// export default Password





import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Password() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    // useRef hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (numberAllowed) str += '0123456789';
        if (charAllowed) str += '&%$#@+?';

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 101);
        document.execCommand('copy');
    }, []);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    return (
        <>
            <div className="container mt-5">
                <div className="card w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
                    <div className="card-body">
                        <h1>Password Generator</h1>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                value={password}
                                className="form-control"
                                placeholder="Password"
                                readOnly
                                ref={passwordRef}
                            />
                            <button
                                onClick={copyPasswordToClipboard}
                                className="btn btn-primary"
                                type="button"
                            >
                                Copy
                            </button>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="d-flex align-items-center gap-1">
                                <input
                                    type="range"
                                    min={6}
                                    max={100}
                                    value={length}
                                    className="form-range cursor-pointer"
                                    onChange={(e) => setLength(e.target.value)}
                                />
                                <label className="form-label">Length: {length}</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="numberInput"
                                    checked={numberAllowed}
                                    onChange={() => setNumberAllowed((prev) => !prev)}
                                />
                                <label className="form-check-label" htmlFor="numberInput">
                                    Numbers
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="charInput"
                                    checked={charAllowed}
                                    onChange={() => setCharAllowed((prev) => !prev)}
                                />
                                <label className="form-check-label" htmlFor="charInput">
                                    Characters
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-bold">
                    <h1 className="text-4xl">Save Your Credentials</h1>
                    <p>To save your credentials, copy the above generated password and follow the links below:</p>
                    <Link to="/encrypted">
                        <button className="btn btn-danger btn-lg rounded-lg px-4 py-3 m-2">
                            Save Credentials with Encryption
                        </button>
                    </Link>
                    <Link to="/unencrypted">
                        <button className="btn btn-danger btn-lg rounded-lg px-4 py-3 m-2">
                            Save Credentials without Encryption
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Password;
