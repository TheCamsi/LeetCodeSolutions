class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        #binary search
        if(x == 0):
            return 0
        if(x == 1):
            return 1
        left, right = 1, x // 2
        while(left <= right):
            mid = (left + right) // 2 #get the midpoint
            if(mid * mid == x):
                return mid
            elif(mid * mid > x):
                right = mid - 1 #move pivots
            else: left = mid + 1
        return right




        