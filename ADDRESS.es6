import toColumn from 'formula-tocolumn';

export default function ADDRESS(row, col, absolute_relative_mode, use_a1_notation, sheet) {
  switch(absolute_relative_mode) {
    case 0:
    return toColumn(col-1) + (row).toString()
    case 2:
    return toColumn(col-1) + "$" + (row).toString()
    case 3:
    return "$" + toColumn(col-1) + (row).toString()
    default:
    return "$" + toColumn(col-1) + "$" + (row).toString()
  }
}
