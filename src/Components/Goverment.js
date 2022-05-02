import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Goverment() {

    useEffect(() => {
        allInfor();
    }, [])



    let [onerow, setOnerow] = useState('');
    let [secondrow, setSecondrow] = useState('');
    let [totaltax, setTotaltax] = useState('');
    //for declare api stateand administration type//
    let [apistate, setApiState] = useState([]);
    let [apiadministration, setApiAdministration] = useState([]);

    const [allinfo, setAllInfo] = useState({
        name: '',
        state: '',
        at: ''
    })

    const [municipalinfo, setMunicipalinfo] = useState({
        municipalproperty: '',
        municipallocation: '',
        municipaltaxes: ''
    })

    const [panchyatinfo, setPanchyatinfo] = useState({
        panchyatland: '',
        panchyatlocation: '',
        panchyattaxes: ''
    })

    let navigate = useNavigate();
    const hii = () =>{
            navigate('/lists');
    }

    const allInfor = () => {
        fetch(`https://99online.website:7047/api/allinfo`)
            .then(response => response.json())
            .then(data => {
                setApiState(data.states)
                setApiAdministration(data.at_type)
            });
    }

    const valueChange = (e) => {
        const { id, value } = e.target
        setAllInfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const valueChangeForMunicipality = (e) => {
        const { id, value } = e.target
        setMunicipalinfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const valueChangeForPanchyat = (e) => {
        const { id, value } = e.target
        setPanchyatinfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }



    const valueChange1 = (e) => {
        //2
        // if (e.target.value === 'panchyat') {
        //     setOnerow('panchyat')
        //     setAllInfo(prevState => ({
        //         ...prevState,
        //         at: e.target.value
        //     }))
        //     //1
        // } else if (e.target.value === 'municipality') {
        //     setOnerow('municipality')
        //     setAllInfo(prevState => ({
        //         ...prevState,
        //         at: e.target.value
        //     }))
        // } else {
        //     setOnerow('')
        //     setAllInfo(prevState => ({
        //         ...prevState,
        //         at: ''
        //     }))
        // }
        if (e.target.value === '2') {
            setOnerow('panchyat')
            setAllInfo(prevState => ({
                ...prevState,
                at: parseInt(e.target.value)
            }))
            //1
        } else if (e.target.value === '1') {
            setOnerow('municipality')
            setAllInfo(prevState => ({
                ...prevState,
                at: parseInt(e.target.value)
            }))
        } else {
            setOnerow('')
            setAllInfo(prevState => ({
                ...prevState,
                at: ''
            }))
        }
    }

    const valueChange2 = (e) => {
        if (e.target.value === 'landmunicipality') {
            setSecondrow('landmunicipality')
            setMunicipalinfo(prevState => ({
                ...prevState,
                municipaltaxes: e.target.value
            }))
            setTotaltax('Tax1,Tax2,Tax3')
        } else if (e.target.value === 'landplusproperty') {
            setSecondrow('landplusproperty')
            setMunicipalinfo(prevState => ({
                ...prevState,
                municipaltaxes: e.target.value
            }))
            setTotaltax('Tax4,Tax5,Tax6')
        } else {
            setSecondrow('');
            setMunicipalinfo(prevState => ({
                ...prevState,
                municipaltaxes: ''
            }))
            setTotaltax('')
        }
    }

    const valueChange3 = (e) => {
        if (e.target.value === 'landpanchyat') {
            setSecondrow('landpanchyat')
            setPanchyatinfo(prevState => ({
                ...prevState,
                panchyattaxes: e.target.value
            }))
            setTotaltax('Tax1,Tax2,Tax3,Tax7')
        }else if (e.target.value === 'notax') {
            setSecondrow('notax')
            setPanchyatinfo(prevState => ({
                ...prevState,
                panchyattaxes: e.target.value
            }))
            setTotaltax('')
         } else {
            setSecondrow('');
            setPanchyatinfo(prevState => ({
                ...prevState,
                panchyattaxes: ''
            }))
            setTotaltax('')
        }
    }

    const saveData = (e) => {
        e.preventDefault();
        console.log(allinfo);
        console.log(municipalinfo);
        console.log(panchyatinfo);
        if (municipalinfo.municipaltaxes) {
            //municipality

            console.log('hello')

        } else {
            //panchyat
            console.log('hi')
        }
        console.log(totaltax);

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": allinfo.name,
            "st_id": parseInt(allinfo.state),
            "at_id": allinfo.at,
            "property": municipalinfo.municipalproperty ? (municipalinfo.municipalproperty) : null,
            "land": panchyatinfo.panchyatland ? (panchyatinfo.panchyatland) : null,
            "location": panchyatinfo.panchyatlocation ? (panchyatinfo.panchyatlocation) : (municipalinfo.municipallocation),
            "taxes": totaltax
        });

        fetch("https://99online.website:7047/api/usertax", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message)
            //state//
            setAllInfo({
                name: '',
                state: '',
                at: ''
            });
            setMunicipalinfo({
                municipalproperty: '',
                municipallocation: '',
                municipaltaxes: ''
            });
            setPanchyatinfo({
                panchyatland:'',
                panchyatlocation: '',
                panchyattaxes: ''
            });
            setTotaltax('')
        });
        setTimeout(()=>{
            navigate('/lists');
        },1000)
        
    }

    return (
        <div>
            <form onSubmit={saveData}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text" name="name" id="name" value={allinfo.name ?? ""} onChange={valueChange} className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">State</label>
                            <select onChange={valueChange} value={allinfo.state ?? ""} className="form-control" name="state" id="state">
                                <option>select State</option>
                                {apistate.map((item) =>
                                    <option value={item.id}>{item.state_name}</option>
                                )}
                            </select>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="exampleInputPassword1">Administrative Type</label>
                            <select value={allinfo.at ?? ""} onChange={valueChange1} className="form-control" name='at' id="at">
                                <option>Select Administration Type</option>
                                {/* <option value="municipality">Municipality</option>
                                <option value="panchyat">Panchyat</option> */}
                                {apiadministration.map((item) =>
                                    <option value={item.id}>{item.at_name}</option>
                                )}
                            </select>
                        </div>
                    </div>

                </div>
                {/* second row */}
                {onerow === 'municipality' ?
                    (<>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Property</label>
                                    <select className="form-control" name='municipalproperty' value={municipalinfo.municipalproperty} onChange={valueChangeForMunicipality} id="municipalproperty" >
                                        <option>Select</option>
                                        <option>commercial</option>
                                        <option>personal</option>

                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Location</label>
                                    <textarea onChange={valueChangeForMunicipality} className="form-control" name='municipallocation' value={municipalinfo.municipallocation} id="municipallocation" placeholder="Required example textarea" required></textarea>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Taxes</label>
                                    <select className="form-control" value={municipalinfo.municipaltaxes ?? ""} onChange={valueChange2} name='municipaltaxes' id="municipaltaxes">
                                        <option></option>
                                        <option value="landmunicipality">land</option>
                                        <option value="landplusproperty">land + property</option>
                                    </select>
                                </div>
                            </div>

                        </div></>) : (onerow === 'panchyat') ?
                        (<>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Land</label>
                                        <select onChange={valueChangeForPanchyat} value={panchyatinfo.panchyatland} className="form-control" id="panchyatland" name='panchyatland'>
                                        <option>Select</option>
                                            <option>vastu</option>
                                            <option>agriculture</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Location</label>
                                        <textarea className="form-control" onChange={valueChangeForPanchyat} value={panchyatinfo.panchyatlocation} name='panchyatlocation' id="panchyatlocation" placeholder="Required example textarea" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Taxes</label>
                                        <select className="form-control" onChange={valueChange3} name="panchyattaxes" value={panchyatinfo.panchyattaxes} id="panchyattaxes">
                                        <option>Select</option>
                                            <option value="landpanchyat">land</option>
                                            <option value="notax">no taxes</option>
                                        </select>
                                    </div>
                                </div>

                            </div></>) : (<></>)}
                {/* third row */}
                {secondrow === 'landmunicipality' ? (<><b>Land Municipality Taxes</b><ul><li>tax1</li><li>tax2</li><li>tax3</li></ul></>) : (<></>)}
                {secondrow === 'landplusproperty' ? (<><b>Land + property Taxes</b><ul><li>tax4</li><li>tax5</li><li>tax6</li></ul></>) : (<></>)}
                {secondrow === 'landpanchyat' ? (<><b>Land Panchayet Taxes</b><ul><li>tax1</li><li>tax2</li><li>tax3</li><li>tax7</li></ul></>) : (<></>)}
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>

            {/* <button onClick={hii}>Back</button> */}
        </div>
    )
}

export default Goverment