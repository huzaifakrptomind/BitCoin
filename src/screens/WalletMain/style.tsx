import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondaryDarkBackground,
  },
  firstContainer:{
    flex: 1.8,
    backgroundColor: THEME.COLORS.secondaryDarkBackground,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  secondContainer:{
    flex: 4.2, backgroundColor:"#F7F7F7",
    // margin:RF(10) 
    justifyContent:'center',
    alignItems:'center'
  },
  firstUpperView:{
    flexDirection: "row" 
  },
  firstBottomView:{
    flexDirection: "row",margin:RF(20)
  },
  firstBottomRightView:{
    flexDirection:'row'
  },
  firstBottomLeftView:{
    flexDirection:'row',paddingRight:RF(20),
  },
  firstBottomInerRightView:{
    flexDirection:'column',paddingLeft:RF(3)
  },
  slideImage: { width: RF(18), height: RF(18),alignSelf:'center',},
  coinImage: { width: RF(70), height: RF(70),alignSelf:'center',marginTop:RF(15)},
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.white,
  },
  coinTitle:{
    fontSize: THEME.FONTS.SIZE.SMALL,
    // color: THEME.COLORS.bitcoinColor,
    fontWeight:'bold',
  },
  coinSubTitle:{
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  coinUsd:{
    alignSelf:'center',fontSize:THEME.FONTS.SIZE.XSMALL,color:THEME.COLORS.black,fontWeight:'700',paddingTop:THEME.PADDING.LOW
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.XXXXXLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    alignSelf: "flex-end",
  },
  dollerTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    paddingTop: THEME.FONTS.SIZE.SMALL,
  },
  decimalTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    paddingTop: THEME.FONTS.SIZE.SMALL,
  },
  incomeTitle:{
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    // paddingTop: THEME.FONTS.SIZE.XSMALL,
  },
  bottomView: {
    flex: 1.5,
    // backgroundColor: "green",
    justifyContent: "center",
  },
 
 
});

export default styles;