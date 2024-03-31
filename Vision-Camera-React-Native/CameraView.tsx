//*****Please  install the following dependencies before running this project
//npm install  react-native-vision-camera react-native-linear-gradient     **********


import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

type Props = {};

const CameraView: React.FC<Props> = () => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const[isCameraType, setIsCameraType] = React.useState<any>();
  const device = useCameraDevice(isCameraType);
  const camera = useRef<Camera | null>(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const cameraPermission = await Camera.requestCameraPermission();
      console.log('Camera permission:', cameraPermission);
    } catch (error) {
      console.warn('Error requesting camera permission:', error);
    }
  };

  const handleFrontCam = () => {
    setIsCameraType('front');
    setIsActive(prevState => !prevState);
    setIsModalVisible(prevState => !prevState);
    console.log('handleFrontCam', isModalVisible);
  };

  const handleBackCam = async () => {
    setIsCameraType('back');
    setIsActive(prevState => !prevState);
    setIsModalVisible(prevState => !prevState);
    console.log('handleBackCam', isModalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <LinearGradient
      colors={['#a6fff4', '#75B4FF', '#4c669f', '#75B4FF', '#3e5998', '#4c669f','#a6fff4',]}
      style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Camera View</Text>
          <Text style={styles.subtitle}>react-native-vision-camera</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={handleFrontCam}>
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a','#75B4FF','#4c669f']}
                  style={styles.btn}>
                  <Text style={styles.btnText}>Front Camera</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={handleBackCam}>
                <LinearGradient
                  angle={70}
                  // useAngle={true}
                  // start={{ x: 0, y: 0 }}
                  // end={{ x: 1, y: 1 }}
                  colors={['#0044A9', '#2769C5', '#4384DA', '#5E9EEE','#75B4FF','#4c669f']}
                  style={styles.btn}>
                  <Text style={styles.btnText}>Rear Camera</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textLite}>Happy Coding....!!!!!!!!</Text>
        </View>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/ShanCodeWay/ShanCodeWay/main/linkdean.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        
        <View style={styles.modalContainer}>
        
            <View style={styles.cameraContainer}>
              {device && isActive && (
                <Camera
                  ref={camera}
                  style={StyleSheet.absoluteFill}
                  device={device}
                  isActive={isActive}
                  photo={true}
                  resizeMode="contain"
                  onStarted={() => console.log('Camera started!')}
                  onStopped={() => console.log('Camera stopped!')}
                />
              )}
 <TouchableOpacity style={styles.buttonClose} onPress={handleBackCam}> 
  <Text style={styles.subtitle}> Close  </Text>
</TouchableOpacity>
            </View>
           
        </View>
      </Modal>
    </LinearGradient>
  </SafeAreaView>
    );
  }


const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    
  },
  container:{
    //backgroundColor:'rgba(52, 52, 52, 0.9)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle:{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flex: 1,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    
  },
  buttonContainer:{
    width:'90%',
    backgroundColor:'rgba(60, 100, 170, 0.3)',
    height:'70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding:20,
    borderRadius: 20,
    
  },
  button:{
        width:'100%',
        height:59,
        justifyContent: 'center',
        // backgroundColor:'rgba(52, 52, 52, 0.3)',
        // padding:20,
        // borderRadius: 20,
       
        
        
  },

textLite:{
  fontFamily                      : 'Poppins',
  fontSize                        : 18,
  fontWeight                      : 'bold',
  fontStyle : 'italic',
  color                           : '#001f33',

  textAlign                       : 'center',
  position : 'relative',
  textShadowColor: 'rgba(0, 0, 0, 0.5)', 
  textShadowOffset: { width: 2, height: 2 }, 
  textShadowRadius: 5, 

},



  header: {
    marginVertical                  : 36,
  },
  title: {
    fontFamily                      : 'Poppins',
    fontSize                        : 42,
    fontWeight                      : 'bold',
    fontStyle : 'italic',
    color                           : '#001f33',
    marginBottom                    : 6,
    textAlign                       : 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
  },
  subtitle: {
    fontFamily                      : 'Poppins',
    fontSize                        : 20,
    fontWeight                      : 'bold',
    fontStyle : 'italic',
    color                           : 'rgba(255, 255, 255, 0.9)',
    textAlign                       : 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
  },
 
 
 
 
  /** Button */
  btn: {
    width : "100%",
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 8,
    paddingVertical : 8,
   
  },

  btnText: {
    fontSize                        : 20,
    fontFamily : 'Helvetica',
    lineHeight                      : 24,
    fontWeight                      : '900',
    color                           : '#fff'
    ,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
  },

  banner: {
    width                           : '100%',
    height                          : 250,
    // borderWidth: 1,
    // borderColor: 'rgba(255, 255, 255, 0.9)',
    //borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    //backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  modalContainer:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonClose:{

    width:'50%',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius : 20,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    paddingVertical : 8,
    position: 'relative',
    backgroundColor: 'rgba(226, 44, 44, 0.7)',
  },

  cameraContainer:{
    flexDirection: 'row',
    width:'70%',
    height:'70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    borderRadius : 20,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    paddingVertical : 8,
    position: 'absolute',
  },
});
export default CameraView;
