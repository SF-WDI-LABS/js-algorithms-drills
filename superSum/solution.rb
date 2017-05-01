
def super_sum(num)
  length = num.num_digits
  unless length == 1
  number = num.to_s.split('').map(&:to_i).reduce(:+)
  return super_sum(number)
  end
  return num
end

#helper function
def num_digits
  Math.log10(self).to_i + 1
end
