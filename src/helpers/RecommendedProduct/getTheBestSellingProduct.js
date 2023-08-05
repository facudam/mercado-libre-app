export const getTheBestSellingProduct = (arr) => {
    let bestSellingProduct = [ arr[0] ]
  
    for (let i = 1; i < arr.length; i++) { 
      if (bestSellingProduct.length > 1) {
        bestSellingProduct = addBestSellingProductBetween_And_To_(bestSellingProduct[0], arr[i], bestSellingProduct) 
      } else {
        bestSellingProduct = bestSellingProductBetween_And_(bestSellingProduct[0], arr[i])
      }
    }
    return bestSellingProduct
}

function addBestSellingProductBetween_And_To_(arr1, arr2, arreglo) {
  if (arr1.sold_quantity === arr2.sold_quantity) {
      arreglo.push(arr2)
  }
  if (!is_BiggerOrEqualTo_(arr1.sold_quantity, arr2.sold_quantity)) {
      arreglo = [arr2]
  }
  return arreglo
}

function is_BiggerOrEqualTo_(number1, number2) {
  return (number1 >= number2)
}

function bestSellingProductBetween_And_(item1, item2) {
    if (item1.sold_quantity > item2.sold_quantity) {
      return [item1]
    } else if (item2.sold_quantity > item1.sold_quantity) {
      return [item2]
    } else {
      return [item1, item2]
    }
}