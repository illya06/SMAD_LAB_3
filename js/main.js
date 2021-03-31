function main() {

    //t_s = smthng | t_l = smthng | q = smthng
    calcInternalValues();

    // mid Statistical
    calcMidStatistical();

    //dispersion
    calcDispersion();

    //standardDeviation
    calcStandardDeviation();

    //calculating estimates with dispersion known
    calcIntEstimate();

    //calculating estimates with dipersion UNknown
    calcNoDispIntEstimate();

    //calculating estimates for standard deviation
    calcIntEstimateForMidStat();
}