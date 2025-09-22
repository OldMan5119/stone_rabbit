<template>
  <div class="sql-executor">
    <div class="main-content">
      <!-- SQL输入区域 -->
      <div class="input-section">
        <div class="input-header">
          <h3>SQL输入</h3>
          <div class="button-group">
            <button @click="executeSQL" :disabled="loading" class="btn btn-primary">
              <span v-if="loading" class="loading-spinner">↻</span>
              {{ loading ? '执行中...' : '执行SQL' }}
            </button>
            <button @click="clearInput" class="btn btn-secondary">清空</button>
            <button @click="insertSampleSQL" class="btn btn-secondary">示例</button>
          </div>
        </div>

        <textarea
            v-model="sqlInput"
            class="sql-input"
            placeholder="请输入SQL语句，例如：
SELECT * FROM users LIMIT 10;
INSERT INTO users (name, email) VALUES ('张三', 'zhangsan@example.com');
UPDATE users SET email = 'new@example.com' WHERE id = 1;
DELETE FROM users WHERE id = 1;"
            @keydown.ctrl.enter="executeSQL"
        ></textarea>

        <div class="shortcut-tip">
          快捷键：Ctrl + Enter 执行
        </div>
      </div>

      <!-- 结果展示区域 -->
      <div class="result-section">
        <h3>执行结果</h3>
        <div class="result-content" :class="{ 'has-error': !lastResult.success }">
          <div v-if="!lastResult.success && lastResult.error" class="error-result">
            <div class="error-header">
              <span class="error-icon">❌</span>
              <strong>SQL执行失败</strong>
            </div>
            <div class="error-details">
              <p><strong>错误信息：</strong>{{ lastResult.error }}</p>
              <p v-if="lastResult.code"><strong>错误代码：</strong>{{ lastResult.code }}</p>
              <p v-if="lastResult.errno"><strong>错误编号：</strong>{{ lastResult.errno }}</p>
              <p v-if="lastResult.sqlState"><strong>SQL状态：</strong>{{ lastResult.sqlState }}</p>
              <p v-if="lastResult.sqlMessage"><strong>详细信息：</strong>{{ lastResult.sqlMessage }}</p>
            </div>
          </div>

          <div v-else-if="lastResult.success && lastResult.data" class="success-result">
            <div v-if="Array.isArray(lastResult.data) && lastResult.data.length > 0">
              <!-- 表格形式展示数据 -->
              <div class="table-container">
                <table class="result-table">
                  <thead>
                  <tr>
                    <th v-for="key in Object.keys(lastResult.data[0])" :key="key">
                      {{ key }}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(row, index) in lastResult.data" :key="index">
                    <td v-for="(value, key) in row" :key="key">
                      <span v-if="value === null" class="null-value">NULL</span>
                      <span v-else-if="typeof value === 'object'">{{ JSON.stringify(value) }}</span>
                      <span v-else>{{ value }}</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="result-info">
                共 {{ lastResult.data.length }} 条记录
              </div>
            </div>
            <div v-else-if="typeof lastResult.data === 'object' && Object.keys(lastResult.data).length > 0">
              <!-- 对象形式展示 -->
              <pre class="json-result">{{ formatJSON(lastResult.data) }}</pre>
            </div>
            <div v-else>
              <p class="success-message">✅ {{ lastResult.message || 'SQL执行成功' }}</p>
            </div>
          </div>

          <div v-else class="empty-result">
            <p>请执行SQL语句查看结果...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {executeSql} from "@/api/mysql";

export default {
  name: 'SQLExecutor',
  data() {
    return {
      sqlInput: '',
      loading: false,
      lastResult: {
        success: null,
        data: null,
        error: null,
        code: null,
        errno: null,
        sqlState: null,
        sqlMessage: null,
        message: null
      }
    }
  },
  methods: {
    async executeSQL() {
      const sql = this.sqlInput.trim();

      if (!sql) {
        this.lastResult = {
          success: false,
          error: '请输入SQL语句'
        };
        return;
      }

      this.loading = true;

      try {
        const response = await executeSql({"sql": sql});

        const result = await response.json();
        this.lastResult = result;
      } catch (error) {
        this.lastResult = {
          success: false,
          error: `网络错误: ${error.message}`
        };
      } finally {
        this.loading = false;
      }
    },

    clearInput() {
      this.sqlInput = '';
      this.lastResult = {
        success: null,
        data: null,
        error: null,
        code: null,
        errno: null,
        sqlState: null,
        sqlMessage: null,
        message: null
      };
    },

    insertSampleSQL() {
      const samples = [
        'SELECT * FROM users LIMIT 10;',
        'SELECT COUNT(*) as total FROM users;',
        'SHOW TABLES;',
        'DESCRIBE users;'
      ];
      this.sqlInput = samples[Math.floor(Math.random() * samples.length)];
    },

    formatJSON(obj) {
      return JSON.stringify(obj, null, 2);
    }
  }
}
</script>

<style scoped>
.sql-executor {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-content {
  background: white;
  overflow: hidden;
}

.input-section {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.input-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.input-header h3 {
  margin: 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

.sql-input {
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  resize: vertical;
  transition: border-color 0.3s;
}

.sql-input:focus {
  outline: none;
  border-color: #667eea;
}

.shortcut-tip {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}

.result-section {
  padding: 20px;
}

.result-section h3 {
  margin: 0 0 15px 0;
  color: #333;
}

.result-content {
  min-height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #fafafa;
}

.result-content.has-error {
  background: #f8d7da;
  border-color: #f5c6cb;
}

.empty-result {
  color: #999;
  text-align: center;
  padding: 40px 20px;
}

.error-result {
  color: #721c24;
}

.error-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 18px;
}

.error-details p {
  margin: 8px 0;
  line-height: 1.5;
}

.success-result {
  color: #155724;
}

.result-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}

.result-table th,
.result-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.result-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  position: sticky;
  top: 0;
}

.result-table tbody tr:hover {
  background-color: #f5f5f5;
}

.null-value {
  color: #999;
  font-style: italic;
}

.json-result {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  overflow: auto;
  max-height: 300px;
}

.result-info {
  color: #666;
  font-size: 14px;
  text-align: right;
}

.loading-spinner {
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.table-container {
  overflow: auto;
  max-height: 400px;
}

@media (max-width: 768px) {
  .input-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .button-group {
    justify-content: center;
  }

  .sql-executor {
    padding: 10px;
  }
}
</style>