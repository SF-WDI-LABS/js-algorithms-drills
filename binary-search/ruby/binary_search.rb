#recursive solution
def binary_search_recursive(array, search_val, low=0, high=array.size - 1)
  return -1 if low > high
  mid = (low + high) / 2
  return mid if array[mid]==search_val
  if array[mid] > search_val
    high = mid - 1
  else
    low = mid + 1
  end
  binary_search(array, search_val, low, high)
end
