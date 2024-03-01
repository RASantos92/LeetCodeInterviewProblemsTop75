import java.util.ArrayList;
import java.util.List;

public class CombinationSum {
    
    private void dfs(int i, List<Integer> cur, int total, int[] candidates, int target, List<List<Integer>> output) {
        if (total == target) {
            output.add(new ArrayList<>(cur));
            return;
        }
        if (i >= candidates.length || total > target) {
            return;
        }
        cur.add(candidates[i]);
        dfs(i, cur, total + candidates[i], candidates, target, output);
        cur.remove(cur.size() - 1);
        dfs(i + 1, cur, total, candidates, target, output);
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> output = new ArrayList<>();
        dfs(0, new ArrayList<>(), 0, candidates, target, output);
        return output;
    }
}
