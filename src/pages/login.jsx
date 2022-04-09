import React from "react";
import logo from '../assets/images/spotify.png'
import faclogo from '../assets/images/face.png'
import apple from '../assets/images/apple.png'
import google from '../assets/images/google.webp'

function Login() {
  

    return (
      <div style={body}>
        <div style={flexrow}>
            <img style={logosize} src={logo} /> 
            <div ><h1 s>Spotify</h1></div>
        </div>
        <hr />
        <div style={flaxcol}>
            <h4>Pour continuer, connectez-vous à Spotify.</h4>
            <button style={butt1} > <img style={imgsize} src={faclogo} /> <h3>CONTINUER AVEC FACEBOOK</h3></button>
            <button style={butt2} > <img style={imgsize} src={apple} /> <h3>CONTINUER AVEC APPLE</h3></button>
            <button style={butt3} > <img style={imgsize} src={google} /> <h3>CONTINUER AVEC GOOGLE</h3></button>
            <button style={butt4} >  <h2>CONTINUER AVEC NUMERO DE <br /> TELEPHONE</h2></button>
            <div> </div>
        </div>
        <div style={flexrow}>
        <hr style={{width:200,marginRight:1}} />OU <hr style={{width:200,marginLeft:1}} />
        </div>
        <div style={flaxcol}>
            <h4  style={{marginLeft:-250}}>Adresse email ou nom d'utilisateur</h4>
            <input style={inpusize} type="text" placeholder="Adresse email ou nom d'utilisateur" />
            <h4  style={{marginLeft:-400}}>Mot de passe</h4>
            <input style={inpusize} type="text" placeholder="Mot de passe" />
            <a style={{marginLeft:-350,color:'black'}} href="#">Mot de passe oublié ? </a>
                <div style={{display:'flex',flexDirection:"row"}}>
                    <input style={{marginLeft:10}} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label for="vehicle2"> Se souvenir de moi</label> 
                    <button style={butt5} >  <h4> SE CONNECTER</h4></button>
                    
                </div>
        </div>
        <hr style={{width:500}} />
        <div style={flaxcol}>
        <button style={butt6} >  <h3>CONTINUER AVEC GOOGLE</h3></button>
        </div>
      </div>
    )
  }
//   --------------------STYLE ------------------------------
  const flexrow =  {display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"};
  const flaxcol = {alignItems:"center",justifyContent:"center",display:'flex',flexDirection:"column"};
  const body =  {padding:20,margin: 'auto'}
  const butt1 ={width:500,height:50,borderRadius:30,backgroundColor:'#3b5998',alignItems:"center",justifyContent:"center",display:'flex',color:'white'}
  const butt2 = {width:500,height:50,borderRadius:30,backgroundColor:'black',alignItems:"center",justifyContent:"center",display:'flex',color:'white',marginTop:15}
  const butt3 = {width:500,height:50,borderRadius:30,backgroundColor:'white',alignItems:"center",justifyContent:"center",display:'flex',color:'#808080',marginTop:15}
  const butt4 = {width:500,height:80,borderRadius:40,backgroundColor:'white',alignItems:"center",justifyContent:"center",display:'flex',color:'#808080',marginTop:15}
  const butt5 = {width:200,height:50,borderRadius:40,backgroundColor:'#1fdf64',alignItems:"center",justifyContent:"center",display:'flex',color:'black',marginTop:15,marginLeft:150}
  const butt6 = {width:400,height:50,borderRadius:30,backgroundColor:'white',alignItems:"center",justifyContent:"center",display:'flex',color:'#808080',marginTop:15}
  const inpusize = {width:500,height:40}
  const imgsize ={width:20,height:20}
  const logosize = {width:50,height:50}
  

  export default Login

