export const getReputationPoint = (reputation) => {
    switch(reputation) {
      case 'silver':
        return 3;
      case 'gold':
        return 5;
      case 'platinum':
        return 10;
      default:
        return 0
    }
}