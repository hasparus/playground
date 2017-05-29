def compress(sequence)
  res = 0
  sequence.each_with_index do |v, i|
    res |= v << 10 * i
  end
  res
end

def ones(n)
  2**n - 1
end

def parts(string, count)
  size = string.length / count
  Array.new(count) { |i| string[i * size, size] }
end

def decompress(bignum, size)
  (0..size - 1).map do |i|
    (bignum >> 10 * i) & ones(10)
  end
end

###

seq = [1000, 1000, 1000, 1000, 1, 1, 7]
print seq.reverse
puts
yota = compress seq
puts yota
print (parts format('%070b', yota), seq.length)
seq2 = decompress yota, seq.length
puts
print seq2.reverse
puts "\n\n"

def neighbors(sequence, capacities)
  arr = []
  n = sequence.length
  n.times do |i|
    if sequence[i] >= 0
      n.times do |j|
        contents = sequence.clone
        if i == j # pour water out of bucket
          contents[i] = 0
          arr << contents
        else # pour water between buckets
          # print '--> ' + contents.to_s + " \n"
          # puts  'capacities ' + capacities.to_s + " \n"
          space = capacities[j] - contents[j]
          if space > 0 
            possible = space < contents[i] ? space : contents[i]
            contents[i] -= possible
            contents[j] += possible
            arr << contents
          end
        end
      end
    end
  end
  arr
end

def water(sequence)
  # @type Array
  capacities = sequence.clone
  size = capacities.length
  longest_path = 0
  x = compress sequence
  achieved_contents = { x => longest_path }
  to_extend = [x]

  until to_extend.empty?
    x = to_extend.shift
    sequence = decompress x, size
    neighbors(sequence, capacities).each do |neighbor|
      y = compress neighbor
      next unless achieved_contents[y].nil?
      path_length = achieved_contents[x] + 1
      longest_path = path_length if longest_path < path_length
      achieved_contents[y] = path_length
      to_extend << y
    end
  end

  [achieved_contents, longest_path]
end

input = [1, 2, 3, 4, 6, 7, 2, 3]
r = water input
print (r.first.map { |k, v| [decompress(k, input.length), v] }).to_h
puts "\n #{r.first.size} #{r[1]}"
